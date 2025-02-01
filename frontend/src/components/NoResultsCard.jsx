import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, RefreshCw } from "lucide-react"

export function NoResultsCard({ searchTerm, onClearSearch }) {
    return (
      <Card className="w-1/2 flex flex-col items-center justify-center p-6 text-center h-1/2 border-2 border-dashed border-[#0c2d54] bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#0c2d54]">No Results Found</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Search className="w-16 h-16 text-[#0c2d54] mb-4 opacity-50" />
          <p className="text-[#183d6d] mb-6 max-w-md">
            {searchTerm ? `We couldn't find any results for "${searchTerm}"` : "No items match your current filters"}
          </p>
          <Button
            onClick={onClearSearch}
            className="bg-[#0c2d54] hover:bg-[#183d6d] text-white transition-colors duration-200"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Clear Search
          </Button>
        </CardContent>
      </Card>
    )
  }