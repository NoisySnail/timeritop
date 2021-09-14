import { useEffect, useState } from "react";

function useObservable(observable, initialState) {
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        const subscription = observable.subscribe(newValue => {
            setValue(newValue);
        });
        return () => subscription.unsubscribe();
    }, []);

    return value;
}

export default useObservable;