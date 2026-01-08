import React from 'react';

// This component is intentionally broken for build error demonstration.
// DO NOT FIX: Used for tooling/CI test of build failures.

function BrokenSample() {
    // Intentional syntax error below (missing closing parenthesis
    return <div>Broken component!
}

export default BrokenSample;
