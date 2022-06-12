import { billType } from "../../types";

interface IBillProps {
    billl: billType
}



const Bill: React.FunctionComponent<IBillProps> = ({billl}) => {
  return (
    <tbody>
          <tr>
              <td>{billl.id}</td>
              <td>{billl.productId}</td>
              <td>{billl.amount}</td>
              <td>{billl.date}</td>
              <td>{billl.providerId}</td>
          </tr>
    </tbody>
  )

      
};

export default Bill;