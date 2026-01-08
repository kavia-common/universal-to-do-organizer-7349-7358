import React from 'react'

// This component is intentionally broken for build error demonstration purposes.
// DO NOT FIX: This is used to test CI/build systems for failure handling.

function BrokenAgain() {
    // Intentional syntax error below: missing return keyword
    <div>This component is missing a return!</div>
}

export default BrokenAgain
