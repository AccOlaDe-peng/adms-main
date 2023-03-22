import { useEffect, useState } from "react";
import { Button, Modal } from "antd";

function App() {
    window.$wujie?.bus.$on("send", (count: number) => {
        console.log(count);
    });
    const handleSendChange = () => {
        // window.$wujie?.bus.$emit("send", "changezi", "xxxx");
        Modal.success({ content: "子应用的提示" });
    };

    return (
        <div
            style={{
                minHeight: "100%",
                width: "100%",
            }}
        >
            <Button onClick={handleSendChange}>发送</Button>
        </div>
    );
}

export default App;
