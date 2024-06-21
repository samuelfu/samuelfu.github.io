import torch
import torch.nn as nn
import torch.optim as optim

# Define the custom neural network
class CustomNet(nn.Module):
    def __init__(self):
        super(CustomNet, self).__init__()
        # Manually set weights and biases for the first layer
        self.hidden = nn.Linear(2, 2)
        self.hidden.weight = nn.Parameter(torch.tensor([[-0.7, 0.2], [0.5, 0.3]]))
        self.hidden.bias = nn.Parameter(torch.tensor([0.5, -0.5]))
        # Manually set weights and biases for the output layer
        self.output = nn.Linear(2, 1)
        self.output.weight = nn.Parameter(torch.tensor([[-0.1, 0.7]]))
        self.output.bias = nn.Parameter(torch.tensor([0.9]))
        # Define tanh activation
        self.tanh = nn.Tanh()
        
    def forward(self, x):
        x = self.tanh(self.hidden(x))
        x = self.tanh(self.output(x))
        return x

# Define input and desired output
inputs = torch.tensor([[2.0, 3.0], [0.5, 1.0]])
desired_outputs = torch.tensor([[1.0], [-1.0]])

# Initialize the neural network
net = CustomNet()

# Define loss function (sum of squared differences)
criterion = lambda output, target: torch.sum((output - target) ** 2)

# Define optimizer
optimizer = optim.SGD(net.parameters(), lr=0.01)

# Training loop
epochs = 20
for epoch in range(epochs):
    optimizer.zero_grad()  # Zero the gradients
    outputs = net(inputs)  # Forward pass
    loss = criterion(outputs, desired_outputs)  # Compute loss
    loss.backward()  # Backward pass
    optimizer.step()  # Update weights
    
    if (epoch+1) % 100 == 0:
        print(f'Epoch [{epoch+1}/{epochs}], Loss: {loss.item()}')

# Print final output and loss
final_output = net(inputs)
final_loss = criterion(final_output, desired_outputs)
print('Final output:', final_output)
print('Final loss:', final_loss.item())

