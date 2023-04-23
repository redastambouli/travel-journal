import locationIcong from '/src/assets/location-icon.svg'

export default function Place(props) {

    return (
        <div className="place-section">
            <img src={props.imageUrl} />
            <section className='info-section'>
                <div className='location-section'>
                    <img src={locationIcong} />
                    <p>{props.location}</p>
                    <a href={props.googleMapUrl} target="_blank">view on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </section>

        </div>


    )

}