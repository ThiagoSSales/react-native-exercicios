import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [70, 45, 28, 80, 99, 43],
            strokeWidth: 3, // optional
        },
    ],
};

export default class LineGraphic extends Component {
    render() {
        return(
            <View>
                <Text>
                    Test Line Chart
                </Text>
                <LineChart
                    data={lineData}
                    width={Dimensions.get('window').width}
                    height={220}
                    yAxisLabel={'R$'}
                    chartConfig={{
                        //backgroundColor: 'red',
                        backgroundGradientFrom: 'black',
                        backgroundGradientTo: 'black',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        )
    }
}