import React from 'react'

// This component is intentionally broken: uses useState without importing it from React.
// DO NOT FIX: This is for CI/build error demonstration only.

function MissingUseStateImport() {
    // Intentionally calling useState without importing it
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Missing useState Import</h2>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    );
}

export default MissingUseStateImport
