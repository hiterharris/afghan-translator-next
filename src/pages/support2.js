import Reacts from 'react';

const Support2 = () => {
    return (
        <form name="contact" netlify>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}

export default Support2;