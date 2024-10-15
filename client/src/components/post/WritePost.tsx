import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {category} from "../../types.ts";

export function WritePost() {
    const location = useLocation();
    let previousCategory;
    if (location.state && "category" in location.state) {
        previousCategory = location.state.category;
    } else previousCategory = undefined;

    const [categories, setCategories] = useState<category[]>([]);
    const [selected, setSelected] = useState<number>(0);

    useEffect(() => {
        const url = import.meta.env.VITE_URL;
        //Fetching categories
        fetch(`${url}/forum/categories`)
            .then(data => data.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error('Error:', error))
    }, []);

    function handleSelect() {

    }

    const options = [];
    if (categories.length > 0) {
        const index = categories.findIndex(value => {
            if (value.urlName === previousCategory) return true;
        });

        for (const category of categories) {
            options.push(<option value={category.urlName} key={category.urlName}>{category.title}</option>);
        }

        if (index > -1) {
           setSelected(index);
        }
    }

    return (
        <div>
            <p>Write a post</p>
            <select name="categorySelect" value={selected} onChange={handleSelect}>
                {...options}
            </select>
        </div>
    );
}