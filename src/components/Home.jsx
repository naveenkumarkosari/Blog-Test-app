import { Link } from 'react-router-dom';

function Home({ data }) {
  return (
    <div>
      

      <h2>List of Previous posts:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} className='card d-flex p-2 mb-3 w-50 p-3'>
            <div className='card-body'>
            <h5 className='card-header'>{item.title}</h5>
            <p className='card-tex'>{item.content}</p>
            <p className='card-title'>createdBy-{item.author}</p>
            <Link to={`/edit/${index}`} className='btn btn-warning'>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
      
      <Link to="/addpost" className='btn btn-success mx-auto'>Add new  Post</Link>
    </div>
  );
}

export default Home;


