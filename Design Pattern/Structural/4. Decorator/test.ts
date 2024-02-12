interface FetchService {
  fetchData(url: string): string;
}

class ConcreteFetchService implements FetchService {
  fetchData(url: string): string {
    // Simulate fetching data
    return `Data from ${url}`;
  }
}

class FetchServiceDecorator implements FetchService {
  protected wrappee: FetchService;

  constructor(fetchService: FetchService) {
    this.wrappee = fetchService;
  }

  fetchData(url: string): string {
    return this.wrappee.fetchData(url);
  }
}

class LoggingFetchServiceDecorator extends FetchServiceDecorator {
  fetchData(url: string): string {
    console.log(`Fetching data from ${url}`);
    const data = super.fetchData(url);
    console.log(`Fetched data: ${data}`);
    return data;
  }
}

function clientCode(fetchService: FetchService) {
  const data = fetchService.fetchData("https://example.com/api/data");
  console.log(data);
}

const simpleFetchService = new ConcreteFetchService();
const loggedFetchService = new LoggingFetchServiceDecorator(simpleFetchService);

// Use the decorated service
clientCode(loggedFetchService);
