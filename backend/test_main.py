from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_home():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {
        "success": "success"
    }

def test_add_todo():

    response = client.post(
        "/todos",
        json={
            "text": "Study Jenkins"
        }
    )

    assert response.status_code == 200

    assert response.json() == {
        "message": "success"
    }


if __name__ == "__main__":
    test_home()
    test_add_todo()
    print("All tests passed!")