import Box from '@mui/material/Box'
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress'

export function CountdownProgress(
  props: LinearProgressProps & { value: number },
) {
  const { value, ...otherProps } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={100 - value}
          {...otherProps}
        />
      </Box>
    </Box>
  )
}
