import './Table.scss';

export default function Table(props) {
    return(
        <div className="table_view">
            <table>
                <thead>
                    <tr>
                        {props.fileHeaders.map(header_key => (
                            <th className="word-icon header">{header_key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.fileInfo.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((value) => (
                                <td className="word-icon filter">{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}