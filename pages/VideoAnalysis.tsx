import type { NextPage } from 'next'
import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { stepId } from '../state/videoAnalysis'
import { styled } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import DownloadIcon from '@mui/icons-material/Download'
import DownloadDoneIcon from '@mui/icons-material/DownloadDone'
import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import OutputIcon from '@mui/icons-material/Output'
import DoneIcon from '@mui/icons-material/Done'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'

import VideoComponent from '../components/videoComponent'
import AnalysisTableComponent from '../components/AnalysisTableComponent'

const VideoAnalysis: NextPage = () => {
  const step = useRecoilValue(stepId)
  const steps = [
    '動画読み込み',
    '解析準備完了',
    '解析中',
    '結果生成中',
    '解析完了',
  ]
  const icons: { [index: string]: ReactElement } = {
    1: <DownloadIcon />,
    2: <DownloadDoneIcon />,
    3: <TroubleshootIcon />,
    4: <OutputIcon />,
    5: <DoneIcon />,
  }

  const ColorLibStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props

    return (
      <StyledColorLibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </StyledColorLibStepIconRoot>
    )
  }
  const CustomizedSteppers = () => {
    return (
      <Stepper
        alternativeLabel
        activeStep={step}
        connector={<StyledColorLibContainer />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorLibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    )
  }

  return (
    <>
      <Typography variant='h4' gutterBottom>
        楽曲解析
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} justifyContent='center' alignItems='stretch'>
            <CustomizedSteppers />
          </Grid>
          <Grid
            item
            xs={7}
            container
            direction='row'
            justifyContent='center'
            alignItems='stretch'
          >
            <VideoComponent />
          </Grid>
          <Grid
            item
            xs={5}
            container
            direction='row'
            justifyContent='center'
            alignItems='stretch'
          >
            <AnalysisTableComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

const StyledColorLibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(26, 55, 77) 0%,rgb(64, 104, 130) 50%,rgb(105, 152, 171) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(26, 55, 77) 0%,rgb(64, 104, 130) 50%,rgb(105, 152, 171) 100%)',
  }),
}))

const StyledColorLibContainer = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(26, 55, 77) 0%,rgb(64, 104, 130) 50%,rgb(105, 152, 171) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(26, 55, 77) 0%,rgb(64, 104, 130) 50%,rgb(105, 152, 171) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

export default VideoAnalysis
