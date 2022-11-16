import styled from "./Home.module.scss"

export default function Home({textH1 , textPage , children}){
    return (
        <div className={styled.Home}>
            <h1 className={styled.Home__h1}>{textH1}</h1>
            <p className={styled.Home__page}>{textPage}</p>
            {children}
        </div>
    )
}