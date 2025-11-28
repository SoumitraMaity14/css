import "./Grid.css"

export const Grid = () => {
    return (
        <div className="">
            {/* grid example */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#f5f] col-1">1</div>
                <div className="bg-red-200 col-1">2</div>
                <div className="bg-black col-1">3</div>

            </div>
            <div className="grid grid-rows-3 gap-4">
                <div className="row-1 bg-blue-300">1</div>
                <div className="row-1 bg-green-300">2</div>
                <div className="row-1 bg-yellow-300">3</div>

            </div>
            {/* flex example */}
            <div className="flex gap-4">
                <div className="bg-purple-300 p-4">Flex 1</div>
                <div className="bg-pink-300 p-4">Flex 2</div>
                <div className="bg-gray-300 p-4">Flex 3</div>
            </div>

            {/*  grid example with common css*/}
            <div className="common-css">
                <div className="box">Common CSS 1</div>
                <div className="box"> common css 2</div>
                <div className="box"> common css 3</div>
            </div>
            {/* flex common */}
            <div className="flex-common">
                <div className="box">Flex Common 1</div>
                <div className="box">Flex Common 2</div>
                <div className="box">Flex Common 3</div>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <label>Custom Checkbox</label>
            </div>
        </div>
    )
}
