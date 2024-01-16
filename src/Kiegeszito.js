export default function Kiegeszito({tomb, alap}){
    return[
        <div>
            <span>{tomb[0]}</span>
            <input id="valasz"></input>
            <span>{tomb[1]}</span>
            <span> ({alap})</span>
        </div>
    ]
}