import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { PageState } from '../state/general'
import Layout from '../components/Layout'
import VideoAnalysis from './VideoAnalysis'
import ChartView from './ChartView'
import About from './About'

const APP: NextPage = () => {
  const [page, setPage] = useRecoilState(PageState)
  return (
    <Layout>
      {page === '楽曲解析' && <VideoAnalysis></VideoAnalysis>}
      {page === 'グラフ' && <ChartView></ChartView>}
      {page === 'About' && <About></About>}
    </Layout>
  )
}

export default APP
