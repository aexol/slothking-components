import { style, media } from 'typestyle';

export const Modal = style({
  display: 'none',
  position: 'fixed',
  zIndex: 20,
  right: 0,
  top: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.7)',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'stretch'
});
export const open = style({
  display: 'flex'
});
export const Dialog = style(
  {
    display: 'flex',
    flexFlow: 'row nowrap',
    overflow: 'auto',
    flex: 1,
    margin: '30px 60px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    maxWidth: 1000
  },
  media(
    {
      maxWidth: 1023
    },
    {
      flexDirection: 'column'
    }
  )
);
export const ModalHeader = style({
  minWidth: '320px',
  padding: '20px',
  fontWeight: 'lighter',
  display: 'flex',
  flexFlow: 'column nowrap'
});
export const Close = style({
  marginRight: 'auto',
  width: '36px',
  height: '36px',
  lineHeight: '24px',
  border: 'solid 1px',
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.35s ease-out',
  $nest: {
    '&:hover': {}
  }
});
export const ModalHeaderSpan = style({
  marginTop: '36px',
  lineHeight: '64px',
  fontSize: '36px',
  textAlign: 'center'
});
export const ModalBody = style({ flex: '1', overflowY: 'auto', padding: '30px' });
