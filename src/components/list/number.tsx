/**
 * A numbered list
 * @example
 *  1. Item 1
 *  2. Item 2
 *  ...
 * @function
 * @prop list <ListItem[]>
 * @returns JSX
 */

import { INumberList } from "./data";

export default function NumberList(props: INumberList){
    return (
        <ul className="mb-6 pl-5 list-inside list-decimal md:mb-8 space-y-1">
            {
                props.list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.title !== undefined && (
                                <b>{item.title}</b>
                            )}
                            {item.body}
                        </li>
                    );
                })
            }
        </ul>
    );
}