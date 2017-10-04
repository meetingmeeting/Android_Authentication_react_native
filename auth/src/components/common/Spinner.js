import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({sizeProps}) => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size ={sizeProps || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justicyContent: 'center',
        alignItem: 'center'
    }
};

export { Spinner };