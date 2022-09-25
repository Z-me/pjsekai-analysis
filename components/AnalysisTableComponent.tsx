import type { NextPage } from 'next'
import { useState, SyntheticEvent } from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

type TableData = (string | number)[][]
const createComboTableData = (
  keys: string[],
  normal: (string | number)[],
  critical: (string | number)[],
  total: (string | number)[]
): TableData => {
  return keys.map((key, i) => {
    return [key, normal[i], critical[i], total[i]]
  })
}
const createSummaryTableData = (
  keys: string[],
  values: (string | number)[]
): TableData => {
  return keys.map((key, i) => {
    return [key, values[i]]
  })
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`result-tabpanel-${index}`}
      aria-labelledby={`result-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `result-tab-${index}`,
    'aria-controls': `result-tabpanel-${index}`,
  }
}

const AnalysisTableComponent: NextPage = () => {
  const [tab, setTab] = useState<number>(0)
  const handleChangeTabs = (event: SyntheticEvent, newTab: number) => {
    setTab(newTab)
  }

  const summaryKeys = ['最高密度', '最低密度', 'hoge', 'fuga']
  const summaryValues = [0, 0, 0, 0]
  const summaryRows = createSummaryTableData(summaryKeys, summaryValues)

  const comboKeys = ['Normal', 'Flick', 'Long', '(計)']
  const comboNormal = [0, 0, 0, 0]
  const comboCritical = [0, 0, 0, 0]
  const comboTotal = [0, 0, 0, 0]
  const comboRows = createComboTableData(
    comboKeys,
    comboNormal,
    comboCritical,
    comboTotal
  )

  const tableBody = (rows: TableData) => (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row[0]}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {row.map((column) => (
            <TableCell align='right'>{column}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChangeTabs} aria-label='result tab'>
          <Tab label='集計情報' {...a11yProps(0)} />
          <Tab label='コンボ数' {...a11yProps(1)} />
        </Tabs>
      </Box>
      {/* 集計情報 */}
      <TabPanel value={tab} index={0}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>項目</TableCell>
                <TableCell align='right'>値</TableCell>
              </TableRow>
            </TableHead>
            {tableBody(summaryRows)}
          </Table>
        </TableContainer>
      </TabPanel>
      {/* コンボ数 */}
      <TabPanel value={tab} index={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>コンボ数</TableCell>
                <TableCell align='right'>Normal</TableCell>
                <TableCell align='right'>Critical</TableCell>
                <TableCell align='right'>(計)</TableCell>
              </TableRow>
            </TableHead>
            {tableBody(comboRows)}
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  )
}

export default AnalysisTableComponent
