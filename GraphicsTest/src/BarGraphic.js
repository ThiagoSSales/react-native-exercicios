import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import {
    BarChart,
} from 'react-native-chart-kit'

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [150, 45, 28, 80, 99, 43],
        },
    ],
};

export default class BarGraphic extends Component {
    render() {
        return (
            <View>

                <Text>
                    Test Bar Chart
            </Text>
                <BarChart
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    data={barData}
                    width={Dimensions.get('window').width}
                    height={220}
                    yAxisLabel={'R$'}
                    chartConfig={{
                        //backgroundColor: 'red',
                        backgroundGradientFrom: 'red',
                        backgroundGradientTo: 'orange',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                />
            </View>
        )
    }
}