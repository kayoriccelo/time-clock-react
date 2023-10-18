import { IList } from "./interfaces"
import {
    SList, SListContent, SListFooter, SListHeader, SListHeaderAction, SListHeaderSearch
} from "./styles"


export function List({ search, action, content, footer }: IList) {
    return (
        <SList>
            {(search || action) && (
                <SListHeader>
                    {search && (
                        <SListHeaderSearch>
                            {search}
                        </SListHeaderSearch>
                    )}

                    {action && (
                        <SListHeaderAction>
                            {action}
                        </SListHeaderAction>
                    )}
                </SListHeader>
            )}

            {content && (
                <SListContent>
                    {content}
                </SListContent>
            )}

            {footer && (
                <SListFooter>
                    {footer}
                </SListFooter>
            )}
        </SList >
    )
}
