import React from 'react'
import TitleBox from '../titleBox'

export interface IntroProps {
    headline?: string
    summary?: []
}

export const Intro: React.FC<IntroProps> = props => (
    <div className="pb-2 mb-5 pt-md-0">
        {/* <p className="lead font-weight-normal">{props.headline}</p> */}
        <TitleBox
            headline={props.headline}
            box="title-box-2"
            titleType="title-left"
        />
        {props.summary &&
            props.summary.map((content: string, i: number) => {
                return (
                    <p className="lead" key={i}>
                        {content}
                    </p>
                )
            })}
    </div>
)

export default Intro
