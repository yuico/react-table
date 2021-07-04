export default function TableList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((list) => (
          <tr>
            <td>{list.postId}</td>
            <td>{list.name}</td>
            <td>{list.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
