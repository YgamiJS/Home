export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    
    return Array.from({length: totalPages} , (_ , i) => i + 1);
    
}