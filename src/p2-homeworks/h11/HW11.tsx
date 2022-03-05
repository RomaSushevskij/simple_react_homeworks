import React, {useState} from 'react'
import style from "../h1/HW.module.css";
import s from "./HW11.module.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';





function HW11() {
    const [value1, setValue1] = useState<number | number[]>(20)
    const [value2, setValue2] = useState<number[]>([20, 40])
    const minDistance = 5;

    const onChangeCallback = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            const value = Math.min(newValue, value2[1] - minDistance)
            setValue1(value);
            setValue2([value, value2[1]]);
        }
        if (Array.isArray(newValue)) {
            if (activeThumb === 0) {
                const min = Math.min(newValue[0], value2[1] - minDistance)
                setValue2([min, value2[1]]);
                setValue1(min);
            } else {
                const max = Math.max(newValue[1], value2[0] + minDistance)
                setValue2([value2[0], max]);
                setValue1(value2[0]);
            }
        }
    };

    return (
        <div className={style.homeWork_1}>
            <div className={style.title}>homework 11</div>


            {/*should work (должно работать)*/}
            <div className={`${style.stand} ${s.stand}`}>
                <div>
                    <span>{value1}</span>

                    <Box width={300}>
                        <Slider value={value1}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                                onChange={onChangeCallback}/>
                    </Box>
                </div>

                <div>
                    <div className={s.values}>
                        <span>{value1}</span><span>{value2[1]}</span>
                    </div>
                    <Box width={300}>
                        <Slider getAriaLabel={() => 'Minimum distance'}
                                value={value2}
                                onChange={onChangeCallback}
                                valueLabelDisplay="auto"
                                disableSwap/>
                    </Box>

                </div>
            </div>
        </div>
    )
}

export default HW11
