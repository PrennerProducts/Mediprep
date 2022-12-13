import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, Platform} from 'react-native';

import moment from 'moment';
import DatePicker from "react-native-date-picker";



const CustomDatePicker = (props) => {
    const { textStyle } = props;
    const [date, setDate] = useState(moment());
    const [show, setShow] = useState(false);

    const onChange = (e, selectedDate) => {
        setDate(moment(selectedDate));
    }
    const onAndroidChange = (e, selectedDate) => {
        setShow(false)
        if(selectedDate){
            setDate(moment(selectedDate));
            props.onDateChange(selectedDate);
        }
    }
    const onDonePress = () => {
        props.onDateChange(date);
        setShow(false);
    }

    const renderDatePicker = () => {
        return(
            <DatePicker
                timeZoneOffsetInMinutes={0}
                value={new Date(moment().toDate())}
                mode="date"
                minimumDate={new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))}
                maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
                />

        );
    }

    return(
        <TouchableHighlight
            activeOpacity={0}
            onPress={() => setShow(true)}>
            <View>
                <Text style={textStyle}>{date.format('MMMM Do, YYYY')} </Text>

                {Platform.OS !== 'ios' && show && renderDatePicker()}
                {Platform.OS === 'ios' && (
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(false)}>
                        <View style={{flex:1}}>
                            <TouchableHighlight
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                }}
                                activeOpacity={1}
                                visible={show}
                                onPress={() => setShow(false)}>
                                <TouchableHighlight
                                    underlayColor={'#FFFFFF'}
                                    style={{
                                        flex: 1,
                                        borderTopColor: '#E9E9E9',
                                        borderTopWidth: 1,
                                    }}
                                    onPress={() => console.log('datepicker clicked')}>

                                    <View style={{
                                        backgroundColor: '#FFFFFF',
                                        height: 256,
                                        overflow: 'hidden',
                                    }}>
                                        <View style={{margin: 20 }}>
                                            {renderDatePicker()}
                                        </View>
                                        <TouchableHighlight
                                            underlayColor={'transparent'}
                                            onPress={onDonePress}
                                            style={[styles.Text, styles.Text]}>
                                            <Text>
                                                Done
                                            </Text>
                                        </TouchableHighlight>
                                    </View>

                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                )}
            </View>
        </TouchableHighlight>
    )
};

CustomDatePicker.defaultProps = {
    textStyle: {},
};

export default CustomDatePicker;