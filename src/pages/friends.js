import db from '@/db';
import { useState } from 'react';

const Friends = ({ friends, friends_has_hobbies, hobbies }) => {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        input: input,
        message: area,
      }),
    });
    setInput('');
    setArea('');
  };

  return (
    <div>
      <h1>Data from MySQL v2.1</h1>
      <ul>
        {friends.map(({ id, name, age }) => (
          <details style={{ marginBottom: '15px' }} key={id}>
            <summary style={{ marginBottom: '10px' }}>
              {name} - {age}
            </summary>
            {friends_has_hobbies
              .filter(({ friends_id }) => friends_id === id)
              .map(({ hobbies_id }) => {
                const hobby = hobbies.find(({ id }) => id === hobbies_id);

                return (
                  <li style={{ marginLeft: '30px' }} key={hobbies_id}>
                    {hobby && hobby.hobby} - {hobby.id}
                  </li>
                );
              })}
          </details>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '25%',
            gap: '20px',
          }}
          onSubmit={submitHandler}
        >
          <input
            type="text"
            name="subject"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />{" "}
          <textarea
            name="message"
            value={area}
            cols={30}
            rows={10}
            onChange={(e) => setArea(e.target.value)}
          ></textarea>
          <input type="submit" value="Send Mail" />
        </form>
      </div>
    </div>
  );
};

export default Friends;

export async function getStaticProps() {
  const friends = await db.select('id', 'name', 'age').from('friends');
  const hobbies = await db.select('id', 'hobby').from('hobbies');
  const friends_has_hobbies = await db
    .select('friends_id', 'hobbies_id')
    .from('friends_has_hobbies');

  return {
    props: {
      friends,
      friends_has_hobbies,
      hobbies,
    },
    revalidate: 60,
  };
}
