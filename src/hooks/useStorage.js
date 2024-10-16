import { Preferences } from '@capacitor/preferences';
import { useState, useEffect } from 'react';

const useStorage = () => {
    const [user, setUser] = useState({});
    const [savedList, setSavedList] = useState([]);

    const setStorage = async (key, value) => {
        await Preferences.set({
            key: key,
            value: JSON.stringify(value)
          });
    }

    const getStorage = async (key) => {
        const ret = await Preferences.get({ key: key });
        const data = JSON.parse(ret?.value);
        return data;
    };

    return { setStorage, getStorage, user, savedList };
}

export default useStorage;
