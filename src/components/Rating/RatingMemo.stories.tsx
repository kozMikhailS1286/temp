import React, {useState} from "react";

export default {
    title: "Rating memo",
}


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const StarMemo = React.memo(Star)
export function Rating(props: RatingPropsType) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    console.log("Rating rendering");
    return (<div>
        <StarMemo selected={ratingValue > 0} onClick={setRatingValue} value={1}/>
        <StarMemo selected={ratingValue > 1} onClick={setRatingValue} value={2}/>
        <StarMemo selected={ratingValue > 2} onClick={setRatingValue} value={3}/>
        <StarMemo selected={ratingValue > 3} onClick={setRatingValue} value={4}/>
        <StarMemo selected={ratingValue > 4} onClick={setRatingValue} value={5}/>
    </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void

}



function Star(props: StarPropsType) {
    console.log("Star rendering");

    return <span onClick={() => {props.onClick(props.value)}}> 
        { props.selected ? <b> star  </b> : "star "}
    </span>
}