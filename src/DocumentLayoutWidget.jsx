import "./ui/DocumentLayoutWidget.css";

export function DocumentLayoutWidget(props) {
    const { headerFooter, headerContent, bodyContent, footerContent, headerHeight, footerHeight } = props;
    const className = "document-layout-widget " + props.class;

    const headerStyle = {
        height: headerHeight + "px"
    };
    const footerStyle = {
        height: footerHeight + "px"
    };

    return (
        <div className={className}>
            <table className="layout-table">
                {(headerFooter === "header" || headerFooter === "both") && (
                    <thead>
                        <tr>
                            <td>
                                {/* Real header content lives INSIDE thead now.
                                    This repeats per page, scoped to THIS table only. */}
                                <div className="header" style={headerStyle}>
                                    {headerContent}
                                </div>
                            </td>
                        </tr>
                    </thead>
                )}
                <tbody>
                    <tr>
                        <td>
                            <div className="content">{bodyContent}</div>
                        </td>
                    </tr>
                </tbody>
                {(headerFooter === "footer" || headerFooter === "both") && (
                    <tfoot>
                        <tr>
                            <td>
                                <div className="footer-space" style={footerStyle}>
                                    &nbsp;
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
            {/* Footer keeps the fixed-position hack, since tfoot doesn't
                reliably pin to the bottom of the page across browsers/print
                engines - it renders right after content on the final page. */}
            {(headerFooter === "footer" || headerFooter === "both") && (
                <div className="footer" style={footerStyle}>
                    {footerContent}
                </div>
            )}
        </div>
    );
}