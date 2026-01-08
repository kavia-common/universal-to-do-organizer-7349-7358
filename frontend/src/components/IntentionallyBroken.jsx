import React from 'react'

// This component contains an intentional syntax error for testing build failures
// DO NOT FIX: This is for CI/build failure demonstration only.

function IntentionallyBroken() {
    // Syntax error below: missing closing curly brace for the function
    return <div>This component will break the build!</div>
    
// There should be a closing brace here, but it's missing
// export default IntentionallyBroken;  <-- Even this export will be missed
