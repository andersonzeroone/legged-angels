import { Container } from './styles';

interface TooltipPros{
  title:string;
  className?:string;

}

const Tooltip:React.FC<TooltipPros> =({title,className='', children}) =>{
  return (
    <Container className={className}>
      {/* {Children} */}
      <span>{title}</span>
    </Container>
  )
}
// function Tooltip({title, className=''}:TooltipPros){
//   return (
//     <Container className={className}>
//       {Children}
//       <span>{title}</span>
//     </Container>
//   )
// }

export default Tooltip;
