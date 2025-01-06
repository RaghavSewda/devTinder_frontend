const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img className="max-w-72" src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-error">Ignore</button>
          <button className="btn btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
