import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

//PURPOSE:  Defines app style
export const styles = StyleSheet.create({
    default: {
        backgroundColor: "white",
        padding: "2%",
        borderRadius: 8,
        margin: "2%"
    },
    txtSig: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 1,
        textAlign: "center"
    },
    txtMin: {
        fontSize: 20,
        textAlign: "center"
    },
    btnGroup: {
        flex: 2,
        flexDirection: "row",
        alignSelf: "center"
    },
    btnInd: {
        padding: 2
    }
});