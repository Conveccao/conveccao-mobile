import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import { ContainerChart, TitleChart } from "./styles";
import api from "../../services/api";
import { URI } from "../../services/uri";

import {
    LineChart,
} from "react-native-chart-kit";

type Props = {
    title: string;
}

type MeasuresProps = {
    id: number;
    value: number;
}

export default function StationChart({ title }: Props) {

    const [stationMeasures, setStationMeasures] = useState<MeasuresProps[]>([]);

    useEffect(() => {
            api
                .get(URI.MEASURES)
                .then((response) => {
                    const measures = response.data;
                    setStationMeasures(measures);
                })
                .catch((error) => {
                    console.log(error);
                })
    }, []);

    const stationMeasuresTest = stationMeasures.map((measure: any) => measure.value);

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
        datasets: [
            {
                data: [
                    stationMeasuresTest[0],
                ]
            },
        ],
    }; 

    const chartConfig = {
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
        <ContainerChart>
            <TitleChart>{title}</TitleChart>

            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </ContainerChart>
    );
}