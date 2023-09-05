export default function Legend(props) {   
    // const [handleLayerToggle, layers] = props; 
    return(<>
        <h2>Legend</h2>

        {/* props.layers.map((name, id) => ( */}
        <label htmlFor="layer-toggle"> {/* key={id} */}
            <input 
                
                className="layer-toggle"
                type="checkbox"
                onChange={props.handleLayerToggle}
            />
            District 11 {/* aka {name} */}
        </label>
        {/* )) */}
    </>);
}