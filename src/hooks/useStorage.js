import { Preferences } from '@capacitor/preferences';
import { useState, useEffect } from 'react';

const useStorage = () => {
    const [user, setUser] = useState({});
    const setStorage = async (key, value) => {
        await Preferences.set({
            key: key,
            value: JSON.stringify(value)
        });
    }

    const getStorage = async (key) => {
        const ret = await Preferences.get({ key: key });
        const user = JSON.parse(ret?.value);
        return user;
    }

    const getUser = async () => {
        try {
          const user = await getStorage('user');
          setUser({id: user.id});
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };


    useEffect(() => {
      getUser();
    }, []);

    return { setStorage, getStorage, user };
}

export default useStorage;
