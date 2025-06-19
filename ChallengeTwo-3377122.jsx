class SearchSuggestionSystem {
    constructor(products) {
        this.products = products.sort();
    }
    
    getSuggestions(searchWord) {
        const result = [];
        
        for (let i = 1; i <= searchWord.length; i++) {
            const prefix = searchWord.substring(0, i);
            const suggestions = [];
            
            for (const product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                    if (suggestions.length === 3) break;
                }
            }
            
            result.push(suggestions);
        }
        
        return result;
    }
}
