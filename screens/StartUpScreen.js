import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import {color} from '../constant/color'
import { AutoAuthenticate} from '../store/actions/auth'

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (!userData) {
                props.navigation.navigate('Authenticate');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, userId, expiryDate,email } = transformedData;
            const expirationDate = new Date(expiryDate);

            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Authenticate');
                return;
            }
            dispatch(AutoAuthenticate(userId, token, email));
            props.navigation.navigate('wellcome');
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={color.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;