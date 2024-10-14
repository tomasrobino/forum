import {useLocation} from "react-router-dom";

export function WritePost() {
    const location = useLocation();
    let category;
    if (location.state && "category" in location.state) {
        category = location.state.category;
    } else category = undefined;


    return (
        <div>
            <p>Write a post</p>
            <select>
                <option value={category}>{category}</option>
            </select>
        </div>
    );
}