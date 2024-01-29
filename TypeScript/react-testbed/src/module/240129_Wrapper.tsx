import { Stack, StackProps } from "@mui/material";

type Props = {
  boxName: string;
  date: string;
} & StackProps

export const UnitBox = ({children, boxName, date}: Props) => {

  return (
    <Stack direction={'row'} sx={{
        borderRadius:'10px',
        borderColor:'#fff',
        borderStyle:'solid',
        borderWidth:'1px',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <Stack direction={'row'} sx={{
          borderRadius:'10px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
      }}>
        <Stack
          sx={{
            width: '100px',
            height: '25px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            flexDirection: 'row',
            padding:'10px',
            gap: '10px',
            borderRadius:'10px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 13,
          }}
        >
          {boxName}
        </Stack>
        <Stack
          sx={{
            width: '800px',
            height: '25px',
            backgroundColor: 'rgba(255,255,255,0)',
            flexDirection: 'row',
            padding:'10px',
            gap: '10px',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          {children}
        </Stack>
      </Stack>
      <Stack
          sx={{
            width: '100px',
            height: '25px',
            backgroundColor: 'rgba(255,255,255,0)',
            flexDirection: 'row',
            padding:'10px',
            gap: '10px',
            borderRadius:'10px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 13,
          }}
        >
          {date}
        </Stack>
    </Stack>
  )
}