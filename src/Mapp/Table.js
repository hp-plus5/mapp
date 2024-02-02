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
                            <th className="word-icon header" key={window.crypto.randomUUID()}>{header_key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.filePlaces.map((place) => (
                        <tr key={window.crypto.randomUUID()}>
                            {Object.values(place).map((place_column_value) => (
                                <td className="word-icon filter"
                                    key={window.crypto.randomUUID()}
                                >{place_column_value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}