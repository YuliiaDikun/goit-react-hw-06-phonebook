import { formatHistoryDate } from '../../service/formatDate';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ transactionHistory }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>
      <tbody>
        {transactionHistory.map(({ id, price, amount, date }, index) => {
          return (
            <Tr key={id}>
              <Td>{index + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{formatHistoryDate(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
