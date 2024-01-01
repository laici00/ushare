import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function Example() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("user").select();
    setUsers(data);
    console.log(data);
  }

  return (
    <div>
      {users &&
        users.map((user,index) => (
          <p key={index}>
            {user.user_name} <br></br>
            {user.age}
          </p>
        ))}
    </div>
  );
}

export default Example;
