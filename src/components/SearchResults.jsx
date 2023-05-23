const SearchResults = ({ data }) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Departure</th>
        <th>Duration</th>
        <th>Arrival</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody data-testid="flight-results">
        {
          //  map through the results and display as rows
          data.map((el,i) => {
            return (
              <tr key={i}>
                <td>{el.departure}</td>
                <td>{el.duration}</td>
                <td>{el.arrival}</td>
                <td>{el.price}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};
export default SearchResults;
