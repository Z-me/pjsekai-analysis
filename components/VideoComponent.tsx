import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LoadingButton from '@mui/lab/LoadingButton'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'

const VIDEO_CLASS_NAME = 'videoElement'

const VideoComponent: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const [embedUrl, setEmbedUrl] = useState<string>('')
  const [finishLoading, setFinishLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!url) return
    console.log(url)
    const youtubeId = url.match(/v=[a-zA-Z -~]{11}/)
    if (youtubeId) {
      const id = youtubeId[0].slice(2)
      console.log(id)
      setEmbedUrl(`https://www.youtube.com/embed/${id}`)
    }
  }, [url])

  const loadingHandler = () => {
    setLoading(true)
    setFinishLoading(true)
    setTimeout(() => {
      const iframe = document.querySelector(`.${VIDEO_CLASS_NAME}`)
      iframe?.setAttribute('src', embedUrl)
    }, 500)
    setLoading(false)
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      {!finishLoading ? (
        <Skeleton
          variant='rectangular'
          animation='wave'
          width={560}
          height={315}
        />
      ) : (
        <iframe className={VIDEO_CLASS_NAME} width='560' height='315'></iframe>
      )}
      <FormGroup row={true}>
        <TextField
          id='youtube-url'
          label='Youtube URL'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <YouTubeIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setUrl(e.target.value)
          }}
          variant='filled'
        />

        <LoadingButton
          onClick={loadingHandler}
          loading={loading}
          loadingPosition='start'
          startIcon={<SlowMotionVideoIcon />}
          variant='contained'
        >
          動画読み込み
        </LoadingButton>
      </FormGroup>
      {/* <iframe width='560' height='315' src={youtubeEmbedUrl}></iframe> */}
    </Grid>
  )
}

export default VideoComponent
