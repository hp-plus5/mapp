import './Table.scss';

/**
 * 
 * @param {*} props.fileHeaders
 * @param {*} props.filePlaces [ {latitude: "39", longitude: "-80", user_column: "", user_column2: "" }, {latitude: "39", longitude: "-80", user_column: "", user_column2: "" }]
 * @returns reprint of the CSV file in our UI
 */
export default function Table(props) {
    return(
        <div className="table_view">
            <table>
                <thead>
                    <tr>
                        {props.fileHeaders.map(header_key => (
                            <th className="word-icon header">{header_key}</th>
                        ))}
                        {/* React requires an ID for this map() method. They suggest this, but I'd love to get something...better. Not sure why it feels bad to use this. https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID */}
                    </tr>
                </thead>
                <tbody>
                    {props.filePlaces.map((place) => (
                        <tr key={place.id}>
                            {Object.values(place).map((place_column_value) => (
                                <td className="word-icon filter">{place_column_value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}