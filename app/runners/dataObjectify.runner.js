exports.CSVToObject = (text) => {
    const [headerLine, ...lines] = text.split("\n")
    const valueSeparator = ";"
    const headers = headerLine.split(valueSeparator)

    const objects = lines.map((line, index) =>
        line.split(valueSeparator).reduce(
            (object, value, index) => {
                const element = {}
                const header = headers[index].trim()
                element[header] = value.trim()
                return {...object, ...element}
            }, {}
        )
    )

    return objects
}